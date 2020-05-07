export const OPEN_MODAL = 'OPEN_MODAL'; 
export const CLOSE_MODAL = 'CLOSE_MODAL'; 

export const openModal = (childComponent) => ({
  type: OPEN_MODAL, 
  childComponent: childComponent
})

export const closeModal = () => ({ 
  type: CLOSE_MODAL
})