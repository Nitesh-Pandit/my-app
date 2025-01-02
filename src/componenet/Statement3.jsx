import * as React from "react";

class IterableExample1 extends React.Component {
    state = {
        first: "loading",
        second: "loading",
        third: "loading",
        forth: "loading",
        fiftth: "loading",
        sixth: "loading",
        donemsg: "loading complete",
    };

    constructor() {
        super();
        setTimeout(() => {
            this.setState({ first: "done" });
        }, 2000);

        setTimeout(() => {
            this.setState({ second: "done" });
        }, 4000);

        setTimeout(() => {
            this.setState({ third: "done" });
        }, 6000);

        setTimeout(() => {
            this.setState({ forth: "done" });
        }, 8000);

        setTimeout(() => {
            this.setState({ fiftth: "done" });
        }, 10000);

        setTimeout(() => {
            this.setState((state) => ({
                sixth: state.donemsg,
            }));
        }, 11000);
    }

    render() {
        return (
            <ul>
                {Object.keys(this.state)
                    .filter((key) => key !== "donemsg")
                    .map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {this.state[key]}
                        </li>
                    ))}
            </ul>
        );
    }
}

export default IterableExample1;
