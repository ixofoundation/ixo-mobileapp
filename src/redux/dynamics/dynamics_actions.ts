export interface Dynamics {
	online?: boolean;
	isModalVisible?: boolean;
}

export const TOGGLE_CONNECTION = { type: 'TOGGLE_CONNECTION' };
export const TOGGLE_MODAL = { type: 'TOGGLE_MODAL' };
export const DYNAMICS_CLEAR_STORE = { type: 'DYNAMICS_CLEAR_STORE' };