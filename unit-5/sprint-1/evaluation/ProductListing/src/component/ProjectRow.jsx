import React from "react";

export const ProjectRow = ({ item, index }) => {
	const [status, setStatus] = React.useState(item.status);
	const toggleStatus = () => {
		//         Provide a toggle button on every project to toggle the status.
		//     The status will change in the following manner:-
		// pending --> completed --> reviewed
		//     If the satatus is reviewd disable the toggle button.

		if (status === "pending") {
			setStatus("completed");
		}
		if (status === "completed") {
			setStatus("reviewed");
		}
	};
	return (
		<>
			<td data-testid='project-id'>{index}</td>
			<td data-testid='project-name'>{item.name}</td>
			<td data-testid='project-tech-stack'>{item.tech_stack}</td>
			<td data-testid='project-assigned-to'>{item.assigned_to}</td>
			<td data-testid='project-status'>{status}</td>
			<td>
				<button data-testid='toggle-button' onClick={toggleStatus}
        disabled={status === 'reviewed'}
        >
					Toggle
				</button>
			</td>
		</>
	);
};