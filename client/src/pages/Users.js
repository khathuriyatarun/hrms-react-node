import Table from '../components/Table'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Users(){
    const [isLoading, setIsLoading] = useState(true);
    const [usersList, setUsersList] = useState(true);

    useEffect(() => {
        fetch(
            'https://react-pegasus-default-rtdb.firebaseio.com/users.json'
        ).then((response) => {
           return response.json()
        }).then((data) => {
            const users = [];
            for(const key in data){
                const user = {
                    id: key,
                    ...data[key]
                }
                users.push(user)
            }
            setIsLoading(false);
            setUsersList(users)
        });

    }, [isLoading]);

    if(isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    }else{
        return (
            <div>
                <div className='d-flex'>
                    <h3 className='page-heading'>Users</h3>
                    <Link className='btn link-btn' to='/users/add'>Add New</Link>
                </div>
                <Table tabledata={usersList} />
            </div>
        );
    }
}

export default Users;