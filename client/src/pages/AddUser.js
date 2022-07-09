import Card from '../layouts/Card';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
function AddUser(){
    const nameInputRef = useRef();
    const dojInputRef = useRef();
    const profileInputRef = useRef();
    const deptInputRef = useRef();
    const history = useHistory();

    function submitUserHandler(event){
        event.preventDefault();
        const user = {
            name: nameInputRef.current.value,
            doj: dojInputRef.current.value,
            image: profileInputRef.current.value,
            department: deptInputRef.current.value,
            status: true
        }

        fetch(
            'https://react-pegasus-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });
        console.log('user added!!',JSON.stringify(user));
    }
    return (
        <div>
            <div className='d-flex'>
                <h3 className='page-heading'>Users/add-new</h3>
            </div>

            <Card>
                <form className='form' onSubmit={submitUserHandler}>
                    <div className='form-wrapper'>
                        <label for="name">Name </label>
                        <input type='text' name="name" ref={nameInputRef} required></input>
                    </div>
                    
                    <div className='form-wrapper'>
                        <label for="doj" >Doj </label>
                        <input type='text' name="doj" placeholder="01 Jan 2000" ref={dojInputRef} required></input>
                    </div>

                    <div className='form-wrapper'>
                        <label for="image">Profile </label>
                        <input type='url' name="image" ref={profileInputRef} required></input>
                    </div>

                    <div className='form-wrapper'>
                        <label>Department </label>
                        <select ref={deptInputRef} required>
                            <option>Development</option>
                            <option>Human Resource</option>
                            <option>Testing</option>
                        </select>
                    </div>

                    <div className='form-wrapper actions'>
                        <button className='btn'>Save</button>
                    </div>
                </form>
            </Card>
        </div>
        
    );
}
export default AddUser;