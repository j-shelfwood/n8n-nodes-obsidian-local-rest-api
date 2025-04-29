import {
    ICredentialType,
    IAuthenticateGeneric,
    INodeProperties,
} from 'n8n-workflow';

export class ObsidianVaultApi implements ICredentialType {
    name = 'obsidianVaultApi';
    displayName = 'Obsidian Vault API';
    properties: INodeProperties[] = [
        {
            displayName: 'Host',
            name: 'host',
            type: 'string',
            default: 'http://localhost:8000',
            description: 'Base URL of your Obsidian Vault REST API (e.g. http://localhost:8000 or http://obsidian-local-rest-api.test)',
        },
        {
            displayName: 'Access Token',
            name: 'token',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            description: 'Leave blank for no authentication (local dev)',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                // Only add Authorization header if token is provided
                Authorization: '={{$credentials.token ? `Bearer ${$credentials.token}` : undefined}}',
            },
        },
    };
}
