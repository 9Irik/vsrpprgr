import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Legend } from 'chart.js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './CharactersDiagram.css';

const CharactersDiagram = () => {
    const characters = useSelector(state => state.characters.characters);

    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Legend
    );

    useEffect(() => {
        const emailsSet = new Set();

        characters.map((character) => {
            return emailsSet.add(character.email.split("@")[1]);
        })
        const emails = Array.from(emailsSet)

        const emailsNumber = emails.map((email) => {
            return characters.filter((character) => character.email.split("@")[1] === email).length;
        })

        setLabels(emails);
        setData(emailsNumber);
    }, [characters]);

    return (
        <div>
            <Bar
            height={"50%"}
                options={{
                    responsive: true,
                    scales: {
                        y: {
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) { if (Number.isInteger(value)) { return value; } },
                            }
                        }
                    }
                }}
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Emails usage',
                            data: data,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                }}
            />
        </div>
    );
}

export default CharactersDiagram;