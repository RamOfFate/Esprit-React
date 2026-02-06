//Composant de classe avec son cycle de vie

import React from "react";

interface LifeCycleState {
  count: number;
}

class LifeCycleExample extends React.Component<{}, LifeCycleState> {
  constructor(props: {}) {
    super(props);

    // Init state

    this.state = {
      count: 0,
    };

    console.log("1. Constructor : composant créé");
  }

  // 1er render

  componentDidMount() {
    console.log("2. componentDidMount : composant affiché dans le DOM");
  }

  // à chaque rerender

  componentDidUpdate(prevProps: any, prevState: { count: any }) {
    console.log("3. componentDidUpdate : composant mis à jour");

    console.log("Ancien count :", prevState.count);

    console.log("Nouveau count :", this.state.count);
  }

  // à al suppression

  componentWillUnmount() {
    console.log("4. componentWillUnmount : composant supprimé");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Fonction pour décrémenter le compteur

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Render

  render() {
    console.log("5. Render : affichage");

    return (
      <div>
        <h2>Cycle de vie d’un composant React</h2>

        <p>Compteur : {this.state.count}</p>

        <button onClick={this.increment}>+ Ajouter</button>

        <button onClick={this.decrement}>- Retirer</button>
      </div>
    );
  }
}

interface AppState {
  showComponent: boolean;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState({ showComponent: !this.state.showComponent });
  };

  render() {
    return (
      <div>
        <h1>Test Cycle de Vie</h1>

        <button onClick={this.toggleComponent}>
          {this.state.showComponent
            ? "Supprimer le composant"
            : "Afficher le composant"}
        </button>

        <hr />

        {this.state.showComponent && <LifeCycleExample />}
      </div>
    );
  }
}
