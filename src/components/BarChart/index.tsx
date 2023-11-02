import Chart from 'react-apexcharts';

type BarChartData = {
    name: string,
    data: number[]
}

type BarChartProps = {
    id?: string,
    colors?: string[],
    data: BarChartData[]

}

export const BarChart = ({ id = 'barChart1', colors = [], data }: BarChartProps) => {
    const options = {
        chart: {
            id: id,
            stacked: true,
            stackType: '100%' as const,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: [''],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        legend: {
            position: 'bottom' as const,
            horizontalAlign: "right" as const
        },
        colors: colors,
        responsive: [
            {
                breakpoint: 480, options: {
                    chart: { width: 280 }
                }
            }, {
                breakpoint: 720, options: {
                    chart: { width: 460 }
                }
            }
        ]
    }

    return (
        <Chart
          options={options}
          type='bar'
          height={180}
          width={720}
          series={data}
          toolbar={
            { show: false }
          }
        />
    )
}
