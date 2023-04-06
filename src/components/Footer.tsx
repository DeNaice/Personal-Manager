
export function Footer(){

    let today = new Date();

    return(
        <footer>
            <div className= "footer-bottom">
           <p className="text-sm-center">Made by Dennis Krs - Copyright &copy; {today.getFullYear()}</p>
            </div>
        </footer>
    )

}