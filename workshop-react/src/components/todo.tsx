import React from "react";

interface ListManagerProps {
  initialItems: string[];
  placeholder: string;
}

interface ListManagerState {
  items: string[];
  newItem: string;
}

class ListManger extends React.Component<ListManagerProps, ListManagerState> {
  constructor(props: ListManagerProps) {
    super(props);
    this.state = {
      items: props.initialItems,
      newItem: "",
    };
  }

  handleChange = (e: { target: { value: any } }) => {
    this.setState({ newItem: e.target.value });
  };

  handleAddItem = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (this.state.newItem.trim() === "") {
      return;
    }
    this.setState({
      items: [...this.state.items, this.state.newItem],
      newItem: "",
    });
  };

  handleDeleteItem = (indexToDelete: number) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((_, index) => index !== indexToDelete),
    }));
  };

  render() {
    return (
      <div className="flex flex-col gap-4 border border-slate-400 p-4 rounded shadow">
        <h2 className="text-4xl font-semibold">Liste</h2>
        <ul className="flex flex-col gap-1 rounded overflow-hidden">
          {this.state.items.map((item, index) => (
            <li
              key={index}
              className=" bg-slate-400 p-2 px-4 hover:bg-slate-500 hover:text-white cursor-pointer flex justify-between"
            >
              {item}
              <button
                className="bg-red-500 px-2 rounded text-white hover:bg-red-600 cursor-pointer"
                onClick={() => this.handleDeleteItem(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleAddItem} className="flex gap-4">
          <input
            type="text"
            placeholder={this.props.placeholder}
            value={this.state.newItem}
            onChange={this.handleChange}
            className="border border-slate-600 p-2 px-4 rounded"
          />
          <button
            type="submit"
            className="bg-emerald-400 hover:bg-emerald-500 text-white p-2 px-4 rounded cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default function Todo() {
  return (
    <div className="">
      <ListManger
        initialItems={["React", "Angular", "VueJs"]}
        placeholder="Entrez un nouvelle element"
      />
    </div>
  );
}
