import {
  Code2,
  File,
  List,
  Notebook,
  Palette,
  Route,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import React from "react";

import Compteur from "@/pages/atelier1/Compteur";
import ListManager from "@/pages/atelier1/ListManager";
import ColorSwapper from "@/pages/atelier1/ColorSwapper";
import GestionnaireNotes from "@/pages/atelier1/GestionnaireNotes";
import TodoPrio from "@/pages/atelier1/TodoPrio";
import Events from "@/pages/atelier2-partie1/Events";
import Events2 from "@/pages/atelier2-partie2/Events2";

export interface Exercise {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  component: React.ComponentType;
}

export const EXERCISES: Exercise[] = [
  {
    id: "sepe1",
    title: "Création d’un compteur",
    description: 'Comprendre la différence entre "state" et "props"',
    path: "/state-et-props/ex1",
    icon: Code2,
    component: Compteur,
  },
  {
    id: "sepe2",
    title: "Gestion d’une liste dynamique",
    description: 'Comprendre la différence entre "state" et "props"',
    path: "/state-et-props/ex2",
    icon: List,
    component: ListManager,
  },
  {
    id: "sepe3",
    title: "Changement de couleur dynamique",
    description: 'Comprendre la différence entre "state" et "props"',
    path: "/state-et-props/ex3",
    icon: Palette,
    component: ColorSwapper,
  },
  {
    id: "sepe4",
    title: "Gestionnaire de notes",
    description: 'Comprendre la différence entre "state" et "props"',
    path: "/state-et-props/ex4",
    icon: File,
    component: GestionnaireNotes,
  },
  {
    id: "sepe4",
    title: "TODO list avec priorités",
    description: 'Comprendre la différence entre "state" et "props"',
    path: "/state-et-props/ex5",
    icon: Notebook,
    component: TodoPrio,
  },
  {
    id: "cf1",
    title: "Event manager",
    description: 'Utiliser des composants fonctionnels',
    path: "/composants-fonctionnels/ex1",
    icon: Ticket,
    component: Events,
  },
  {
    id: "cf2",
    title: "Event manager - 2",
    description: 'Appliquer le routage à notre application React',
    path: "/composants-fonctionnels-routage/ex2",
    icon: Route,
    component: Events2,
  },
];
