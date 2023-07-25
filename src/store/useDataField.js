import { create } from "zustand";

const generateName = ({ afp, fondo, fecha }) => `${afp} ${fondo} | ${fecha}`;

export const useDataField = create((set) => ({
  nextId: 1,
  data: [],
  setData: (newData) =>
    set((state) => ({
      nextId: state.nextId + 1,
      data: [
        ...state.data,
        {
          ...newData,
          id: state.nextId,
          name: generateName(newData),
          read: true,
        },
      ],
    })),
  removeData: (idToRemove) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== idToRemove),
    })),
  updateData: (idToUpdate, updatedData) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === idToUpdate ? { ...item, ...updatedData } : item
      ),
    })),
  toggleRead: (id) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      ),
    })),
}));

export const useCalcField = create((set) => ({
  nextId: 1,
  calc: [],
  setCalc: (newCalc) =>
    set((state) => ({
      nextId: state.nextId + 1,
      calc: [
        ...state.calc,
        {
          ...newCalc,
          id: state.nextId,
          read: true,
        },
      ],
    })),
  removeCalc: (idToRemove) =>
    set((state) => ({
      calc: state.calc.filter((item) => item.id !== idToRemove),
    })),
  updateCalc: (idToUpdate, updatedCalc) =>
    set((state) => ({
      calc: state.calc.map((item) =>
        item.id === idToUpdate ? { ...item, ...updatedCalc } : item
      ),
    })),
  toggleRead: (id) =>
    set((state) => ({
      calc: state.calc.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      ),
    })),
}));

export const useClicked = create((set) => ({
  clicked: true,
  setClicked: () => set((prevState) => ({ clicked: !prevState.clicked })),
}));

export const useSave = create((set) => ({
  save: true,
  setSave: () => set((prevState) => ({ save: !prevState.save })),
}));
