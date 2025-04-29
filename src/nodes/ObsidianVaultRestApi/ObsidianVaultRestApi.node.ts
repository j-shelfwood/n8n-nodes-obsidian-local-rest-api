import {
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from '@devlikeapro/n8n-openapi-node';
import * as openApiSpec from '../../openapi.json';

const builderConfig: N8NPropertiesBuilderConfig = {};
const parser = new N8NPropertiesBuilder(openApiSpec, builderConfig);

// Remove duplicated/unwanted n8n built-in options from properties
const unwantedOptionNames = [
    'batch', 'proxy', 'timeout', 'options', 'maxResults', 'splitIntoItems',
    'continueOnFail', 'jsonParameters', 'responseFormat', 'fullResponse',
    'download', 'fileName', 'fileSize', 'fileExtension', 'fileEncoding',
    'fileContent', 'filePath', 'fileType', 'file', 'files', 'headers',
    'queryParameters', 'bodyParameters', 'authentication',
];
const propertiesRaw = parser.build();
const properties = Array.isArray(propertiesRaw)
    ? propertiesRaw.filter(
        (prop) => !unwantedOptionNames.includes(prop.name)
    )
    : propertiesRaw;

export class ObsidianVaultRestApi implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Obsidian Vault REST API',
        name: 'obsidianVaultRestApi',
        icon: 'file:logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Obsidian Vault via REST API',
        defaults: {
            name: 'Obsidian Vault',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'obsidianVaultApi',
                required: false,
            },
        ],
        requestDefaults: {
            baseURL: '={{$credentials.host}}/api',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties,
    };
}
