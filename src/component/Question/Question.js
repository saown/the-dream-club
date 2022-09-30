import React from "react";

const Question = () => {
    return(
        <div className="question">
            <div className="text-center h1 mt-5 mb-5">Question And Answer</div>
            <div>
                <h5>1. How does react work?</h5>
                <p>Answer: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div>
                <h5>2. Difference between prop and state.</h5>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Prop</th>
                        <th>State</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>The Data is passed from one component to another.</td>
                        <td>The Data is passed within the component only.</td>
                    </tr>
                    <tr>
                        <td>It is Immutable (cannot be modified).</td>
                        <td>It is Mutable ( can be modified).</td>
                    </tr>
                    <tr>
                        <td>Props can be used with state and functional components.</td>
                        <td>State can be used only with the state components/class component (Before 16.0).</td>
                    </tr>
                    <tr>
                        <td>Props are read-only.</td>
                        <td>State is both read and write.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h5>3. Uses of useEffect.</h5>
                <p>Answer: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    )
}

export default Question;