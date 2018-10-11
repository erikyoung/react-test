
import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2'; 

/*
labels: React.js | (28.79%)
jqery.js | 21.04%
HTML | 19.73%
vue.js | 14.83%
typeScript.js | 7.80%
coffeescript | 7.80%



*/

class Chart extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      chartData: {
        labels: ['React.js | (28.79%)', 'jqery.js | (21.04%)', 'HTML | (19.73%)','vue.js | 14.83%', 'typeScript.js | 7.80%', 'coffeescript | 7.80%'],
        datasets: [
        {
          label: 'Visualization',
          data: [ 28.79,21.04,19.73, 14.83, 7.80,7.80
          ],
          backgroundColor: [
            'rgba(31,143,251)',
            'rgba(84,195,194)',
             'rgba(93,195,92)',
             'rgba(251,203,51)',
             'rgba(237,74,100)',
            'rgba(134,74,225)'
            
          ]
        }

      ]
      }
    }
  }



  render() {
    return(
      <div className="chart"><br />
        <Doughnut
          data={this.state.chartData}
          width={400}
          height={500}

          options={{
            cutoutPercentage: 75,
            animation: {
              animationScale: true
            },
           title: {
            display: true,
            text: '', 
            fontSize: 12,
            positon:'top',
           
            
           },
           legend: {
            display: true,
            position: "right",
            labels: {
              position: "right",
              boxWidth: 5,
              usePointStyle: true
              
            }

        }
      }}
     />
    
      </div>
      )
  }



}

export default Chart; 