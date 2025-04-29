"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObsidianVaultApi = void 0;
class ObsidianVaultApi {
    constructor() {
        this.name = 'obsidianVaultApi';
        this.displayName = 'Obsidian Vault API';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    // Only add Authorization header if token is provided
                    Authorization: '={{$credentials.token ? `Bearer ${$credentials.token}` : undefined}}',
                },
            },
        };
    }
}
exports.ObsidianVaultApi = ObsidianVaultApi;
