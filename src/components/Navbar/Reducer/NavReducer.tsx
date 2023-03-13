
import React from 'react'
import 
{
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

export enum NavActionKind {
  toogleNav = 'toogleNav'
}

interface INavContextAction {
  type: NavActionKind;
  payload?: boolean;
}

interface INavContextState {
  open: boolean;
}

const navReducer = (state: INavContextState, action: INavContextAction) => {
  switch (action.type) {
    case NavActionKind.toogleNav:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

const initialState: INavContextState = {
  open: false,
};

const useValue = () => useReducer(navReducer, initialState);

const NavContext = createContext<[INavContextState, Dispatch<INavContextAction>] | null>(null);

export const useNav = () => {
  const value = useContext(NavContext);
  if (value === null) throw new Error('Please add NavProvider');

  return value;
};

type Props = {
  children?: ReactNode;
};

const NavProvider: FunctionComponent<Props> = ({ children }: Props) => (
  <NavContext.Provider value={useValue()}>{children}</NavContext.Provider>
);

export default NavProvider;