import { useHistory } from "react-router-dom";

function Login(){
    const history = useHistory();
    function loginHandler(e){
        e.preventDefault();
        history.replace('/');
    }
    return (
        <div className='login-page'>
            <div className='login-wrapper'>
                <h3 className='text-center logo'>Pegasus</h3>
                <form className='form' onSubmit={loginHandler}>
                    <div className='login-form-wrapper'>
                        <label for="name">Username or Email</label>
                        <input type='text' name="name" required></input>
                    </div>

                    <div className='login-form-wrapper'>
                        <label for="password">Password</label>
                        <input type='password' name="password" required></input>
                    </div>

                    <div className='login-form-wrapper actions'>
                        <button className='btn'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;