import { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'
import { observer } from 'mobx-react-lite'
import { selectStore } from '../stores/SelectStore'
import { httpClient } from '../stores/HttpClient'
import Unselect from '../services/unselect'
import '../styles/components/taskTable.scss'
import arr from '../assets/icons/arr.svg'
import arr2 from '../assets/icons/arr-tab.svg'

const TaskTable: React.FC = observer(() => {
    const columns: any = useMemo(() => [
        { Header: 'id', accessor: 'id' },
        { Header: 'activity', accessor: 'activity' },
        { Header: 'frequency', accessor: 'frequency' },
        { Header: 'resources', accessor: 'resources' },
        { Header: 'price', accessor: 'price' },
        { Header: 'importance level', accessor: 'importanceLevel' },
        { Header: 'urgency level', accessor: 'urgencyLevel' }
    ], []);

    let initialPageSize: number = 8;
    let initialState: object = { pageSize: initialPageSize, pageIndex: 0};

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        state,
        prepareRow,
        page,
        setPageSize,
        nextPage,
        previousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setGlobalFilter
    } = useTable(
        { columns: columns, data: httpClient.tasks, initialState },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    let { globalFilter, pageIndex, pageSize } = state

    return <section className='task-table'>
        <form className='filter-box'>
            <label htmlFor='filter'>Search:</label>
            <input id='filter' type='text' value={globalFilter || ''} onChange={e => {
                setGlobalFilter(e.target.value);
                Unselect.unselect();
            }} />
        </form>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup: any, i: number) => (
                    <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any, i: number) => (
                            <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <img src={column.isSorted ? arr2 : ''} className={column.isSortedDesc ? 'desc' : 'asc'} />
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row: any, i: number) => {
                    prepareRow(row)
                    return <tr className='rw' onClick={() => {selectStore.rowSelect(i, row.values)}} key={i} {...row.getRowProps()}>
                        {row.cells.map((cell: any, i: number) => {
                            return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
        <div className="total">
            <h5>total tasks:</h5>
            <span>{httpClient.tasks.length}</span>
        </div>
        <section className="ctrl">
            <select value={pageSize} onChange={e => {
                setPageSize(Number(+e.target.value));
                Unselect.unselect();
            }}>
                {[initialPageSize, initialPageSize * 2, initialPageSize * 3].map((pageSize: number) => (
                    <option key={pageSize} value={pageSize}>{pageSize}</option>
                ))}
            </select>
            <section className="ctrl-page">
                <img src={arr} onClick={() => {
                    gotoPage(0);
                    Unselect.unselect();
                }} alt="first page" />
                <img src={arr} onClick={() => {
                    previousPage();
                    Unselect.unselect();
                }} alt="prev page" />
                <span>
                    <p>{pageIndex + 1}</p>
                    <p>/</p>
                    <p>{pageOptions.length}</p>
                </span>
                <img src={arr} onClick={() => {
                    nextPage();
                    Unselect.unselect();
                }} alt="next page" />
                <img id='last-page' src={arr} onClick={() => {
                    gotoPage(pageCount - 1);
                    Unselect.unselect();
                }} alt="last page" />
            </section>
        </section>
    </section>
})
export default TaskTable