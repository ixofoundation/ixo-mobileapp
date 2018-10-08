export interface Claim {
	claimData?: string;
	projectDid: string;
	claimId?: string;
	claimFormKey?: string;
}

export interface SelectedClaim {
	claimId: string;
}

export interface ClaimForm {
	formFile: any;
	projectDid: string;
	pdsURL: string;
}

export const CLAIM_ADD = { type: 'CLAIM_ADD' };
export const CLAIM_REMOVE = { type: 'CLAIM_REMOVE' };
export const CLAIM_UPDATE = { type: 'CLAIM_UPDATE' };
export const CLAIM_FILEFORM_SAVE = { type: 'CLAIM_FILEFORM_SAVE' };
export const CLAIM_SELECTED = { type: 'CLAIM_SELECTED' };
