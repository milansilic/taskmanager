import { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'
import '../styles/components/taskTable.scss'
import arr from "../assets/icons/arr.svg"
import arr2 from "../assets/icons/arr-tab.svg"

interface TaskTableModel {
    TASKS: any,
    passToDelete: any,
    passToEdit: any,
    unselect: any,
}

const TaskTable: React.FC<TaskTableModel> = ({ TASKS, passToDelete, passToEdit, unselect}: TaskTableModel) => {
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
    let initialState:any = { pageSize: initialPageSize, pageIndex: 0 };

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
        {columns: columns, data: TASKS, initialState},
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    let { globalFilter, pageIndex, pageSize } = state

    const rowSelect = (i: number, allValues: any) => {
        let tableRows = [...document.getElementsByClassName('rw')]

        if (tableRows[i].classList.contains('selected')) {
            tableRows[i].classList.remove('selected')
            document.body.classList.remove('unlock-edit-delete')
        } else {
            for (const r of tableRows) r.classList.remove('selected')
            tableRows[i].classList.add('selected')
            document.body.classList.add('unlock-edit-delete')
        }

        passToDelete(allValues);
        passToEdit(allValues);
    }

    return <section className='task-table'>
        <form className='filter-box'>
            <label htmlFor='filter'>Search:</label>
            <input id='filter' type='text' value={globalFilter || ''} onChange={e => {
                setGlobalFilter(e.target.value);
                unselect();
            }} />
        </form>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup: any, i: any) => (
                    <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any, i: any) => (
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
                    return <tr className='rw' onClick={() => rowSelect(i, row.values)} key={i} {...row.getRowProps()}>
                        {row.cells.map((cell: any, i: number) => {
                            return <td key={i} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
        <div className="total">
            <h5>total tasks:</h5>
            <span>{TASKS.length}</span>
        </div>
        <section className="ctrl">
            <select value={pageSize} onChange={e => {
                setPageSize(Number(+e.target.value));
                unselect();
            }}>
                {[initialPageSize, initialPageSize*2, initialPageSize*3].map((pageSize: number) => (
                    <option key={pageSize} value={pageSize}>{pageSize}</option>
                ))}
            </select>
            <section className="ctrl-page">
                <img src={arr} onClick={() => {
                    gotoPage(0);
                    unselect();
                }} alt="first page" />
                <img src={arr} onClick={() => {
                    previousPage();
                    unselect();
                }} alt="prev page" />
                <span>
                    <p>{pageIndex + 1}</p>
                    <p>/</p>
                    <p>{pageOptions.length}</p>
                </span>
                <img src={arr} onClick={() => {
                    nextPage();
                    unselect();
                }} alt="next page" />
                <img id='last-page' src={arr} onClick={() => {
                    gotoPage(pageCount - 1);
                    unselect();
                }} alt="last page" />
            </section>
        </section>
    </section>
}
export default TaskTable