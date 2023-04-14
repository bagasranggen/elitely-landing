import React from 'react';

import {createAnimation} from "@/components/animation/helper";

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
    <div
        className="chart-wrapper"
        {...createAnimation({type: "fade-in", direction: "up"})}>
        <div className="chart-area-wrapper">
            <Bar
                options={BarChartOptions}
                data={data} />
        </div>
    </div>
);

export default BarChart;