const {useLocation} = require("react-router");

 export  default function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}