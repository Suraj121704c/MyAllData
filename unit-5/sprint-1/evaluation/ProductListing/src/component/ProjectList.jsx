import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({ data }) => {
	return (
		<div className='project-list-wrapper'>
			<table data-testid='project-container'>
				{/* Add table head  */}
				{/* Map through the list and use `ProjectRow` Component  */}
				<thead>
					<tr>
						<th>S.no</th>
						<th>Name</th>
						<th>Tech Stack</th>
						<th>Assigned To</th>
						<th>Current Status</th>
						<th>Toggle</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<ProjectRow
								key={index}
								item={item}
								index={index + 1}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};