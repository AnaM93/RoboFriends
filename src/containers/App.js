import React, {Component} from 'react'
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'
import './App.css'

class App extends Component {
    constructor(){
    super()
    this.state = {
        robots : [],
        searchField : ''
    }
};
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(risponse => risponse.json())
    .then(users => {this.setState({robots: users})})
}

onSearchChange = (event) =>{
    this.setState({searchField : event.target.value})
    
}

render (){
    const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())})
     if (this.state.robots.length === 0) {
            return <h1> Loading...</h1>
        } else {    
    return(
    <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
             <CardList robots={filteredRobots} robots2={filteredRobots} />
             </ErrorBoundary>
        </Scroll>
    </div>
)}}}

export default App;