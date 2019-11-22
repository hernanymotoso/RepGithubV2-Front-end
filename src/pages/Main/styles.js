import styled, { keyframes, css } from 'styled-components';


export const Form = styled.form`
	margin-top: 30px;
	display: flex;
	flex-direction: row;

	input {
		flex: 1;
		border: 1px solid #eee;
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 16px; 
	}
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}

`;

export const SubmitButton = styled.button.attrs(props => ({
	// type: submit,
	disabled: props.loading,
}))`
	background: #7159c1;
	border: 0;
	padding: 0 15px;
	margin-left: 10px;
	border-radius: 4px;

	/**/
	display: flex;
	justify-content: center;
	align-items: center;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}


    ${props => props.loading && css`
			svg {
				animation: ${rotate} 2s linear infinite;
			}
    	`

    }

	
`;