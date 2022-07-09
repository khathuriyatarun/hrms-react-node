import Card from '../layouts/Card'
function Table(props){
    return (
        <div>
            <Card>
                <table className='table-main'>
                    <tr className='table-header'>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Joining</th>
                        <th>Status</th>
                    </tr>
                    {
                        props.tabledata.map(row => {
                            let profile = ''
                            if(row.image){
                                profile = <div className='user-image'>
                                            <img src={row.image} alt={row.name}></img>
                                        </div>

                            }
                            return (
                                <tr className='table-row'>
                                    <td className='table-title'>
                                        {profile}
                                        <div className='name'>{row.name}</div>
                                    </td>
                                    <td>{row.department}</td>
                                    <td>{row.doj}</td>
                                    <td>{row.status === true ? 'Active' : 'Inactive'}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </Card>
        </div>
    );
}

export default Table;