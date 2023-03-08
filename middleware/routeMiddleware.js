// const uname = "test"
// const password = "test"
export default function check({ route, redirect }) {
    if(route.path!=='/login' && (!localStorage.getItem('uname') || !localStorage.getItem('password'))){
        // alert('Incorrect User Name or Password')
        
    //   ('Incorrect mail or password','error')
        redirect('/login')
    }
}