import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SerperApi implements ICredentialType {
	name = 'serperApi';
	displayName = 'Serper API';
	documentationUrl = 'https://serper.dev/documentation';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};

	// Request dùng để test credential
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://google.serper.dev',
			url: '/search',
			method: 'POST',
			body: {
				q: 'n8n cloudfly',
				gl: 'vn',
				hl: 'vi',
			},
		},
	};
}
