import Chart from 'react-apexcharts';

type RadialChartProps = {
    series?: number[],
    id?: string,
    hollowSize?: string,
    label?: string
}

export const RadialChart = ({
    series = [100],
    id = 'radialChart',
    hollowSize = '70%',
    label = 'Radial Chart' }: RadialChartProps) => {

    const options = {
        chart: {
            id: id,
            type: 'radialBar' as const,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: hollowSize
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -20
                    },
                    value: {
                        fontSize: "40px",
                        formatter: function () { return `${series[0]}` }
                    }
                }

            }
        },
        labels: [label],
        responsive: [
            {
                breakpoint: 480, options: {
                    chart: { width: 280, height: 280 }
                }
            }, {
                breakpoint: 720, options: {
                    chart: { width: 420, height: 420 }
                }
            }
        ],
        colors: [
            function ({ value }: { value: number }) {
                if (value < 0) {
                    return '#FF0000'
                } else if (value < 30) {
                    return '#02DFDE'
                } else if (value < 70) {
                    return '#3CE939'
                } else {
                    return '#3CE939'
                }
            }
        ]
    }

    return (
        <Chart
            options={options}
            series={series}
            height={420}
            width={420}
            type="radialBar"
        />
    )
}
