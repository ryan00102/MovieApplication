//사용자의 제어에 따라 새로운 컴포넌트 렌더링
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function MovieApp() {
    return <Router>
        <Switch>
            <Route path = "/movie/:id">{/*id가 추가되면 Detail컴포넌트를 보여줌*/}
                <Detail />
            </Route>
            <Route path = "/">{/*누군가 이 웹사이트에 있으면 Home 컴포넌트를 보여줌*/}
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default MovieApp;
