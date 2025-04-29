import { ICredentialType, IAuthenticateGeneric, INodeProperties } from 'n8n-workflow';
export declare class ObsidianVaultApi implements ICredentialType {
    name: string;
    displayName: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
}
