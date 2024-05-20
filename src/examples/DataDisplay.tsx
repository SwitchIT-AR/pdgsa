import React from 'react';

interface DataDisplayProps {
    data: any[];
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
    return (
        <div>
            <h2>Contact Data</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th>Timestamp</th>
                    <th>Project</th>
                </tr>
                </thead>
                <tbody>
                {data.slice(1).map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataDisplay;
