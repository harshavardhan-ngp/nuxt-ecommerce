const email = "test"
const password = "test"
export default function check({ route, redirect }) {
    console.log(localStorage.getItem('email'),"email")
    if(route.path!=='/login' && (email!==localStorage.getItem('email') || password!==localStorage.getItem('password'))){
        // alert('Incorrect mail or password')
        
    //   ('Incorrect mail or password','error')
        redirect('/login')
    }
}