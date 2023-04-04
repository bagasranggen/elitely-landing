import React from 'react';

import {Chart as ChartJS, ChartData, ChartOptions, CategoryScale, LinearScale, BarElement, Legend} from "chart.js";
import {Bar} from "react-chartjs-2";

export const BarChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
        y: {
            ticks: {
                callback: (value, index, ticks) => value === 0 ? value : `${value}k`,
            },
            border: {
                display: false
            }
        },
        x: {
            border: {
                display: false
            },
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            position: "bottom" as const
        }
    }
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend);

export type BarChartProps = {
    data: ChartData<"bar", any, any>;
};

const BarChart = ({data}: BarChartProps): React.ReactElement => (
    <Bar
        options={BarChartOptions}
        data={data} />
);

export default BarChart;