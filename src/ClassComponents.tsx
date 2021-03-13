import React from "react";
import style from "./ClassComponents.module.scss";

interface IPprops {
  data?: string;
  count?: number;
}
interface Istate {
  click: number;
}
class ClassComponents extends React.Component<IPprops, Istate> {
  constructor(props: IPprops) {
    super(props);
    this.state = { click: 0 };
    this.secondHandle = this.secondHandle.bind(this);
  }

  handleClick = () => {
    const { click } = this.state;
    this.setState({ click: click + 1 });
  };

  secondHandle() {
    const { click } = this.state;
    this.setState({ click: click - 1 });
  }

  render() {
    const name = "Artem";
    const age = 21;
    const { data, count } = this.props;
    const { click } = this.state;
    return (
      <>
        <h1 className={style.one}>{data}</h1>
        <h1>
          {name}, {age}
        </h1>
        <h1>{count}</h1>
        <button
          type="button"
          onClick={this.handleClick}
          className={style.wrapper}>
          Push
        </button>
        <button
          type="button"
          onClick={this.secondHandle}
          className={style.wrapper}>
          Push
        </button>
        <h1>{click}</h1>
      </>
    );
  }
}
export default ClassComponents;
