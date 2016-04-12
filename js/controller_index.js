angular.module("starter", [])
	.controller('MyFirstDataCtrl', function($scope) { //关于数据
			
		$scope.mydata = [{
			"WeatherDate": "4/1/2014",
			"lstSerieData": [{
				"Aggregation": "00-08",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "12.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "10.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "77"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "E"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "5.4"
				}]
			}, {
				"Aggregation": "08-16",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "20.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "12.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "54"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "SE"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "8.6"
				}]
			}, {
				"Aggregation": "16-24",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "20.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "12.8"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "51"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "E"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "8.6"
				}]
			}]
		}, {
			"WeatherDate": "4/2/2014",
			"lstSerieData": [{
				"Aggregation": "00-08",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "10"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "14.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "11.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "71"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "SE"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "8.6"
				}]
			}, {
				"Aggregation": "8-16",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "5"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "19.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "11.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "58"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "SE"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "13.3"
				}]
			}, {
				"Aggregation": "16-24",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "10"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "19.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "15.1"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "52"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "E"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "13.7"
				}]
			}]
		}, {
			"WeatherDate": "4/3/2014",
			"lstSerieData": [{
				"Aggregation": "0-8",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "10"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "15.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "13.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "62"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "S"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "12.2"
				}]
			}, {
				"Aggregation": "8-16",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "16.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "13.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "64"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "S"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "17.3"
				}]
			}, {
				"Aggregation": "16-24",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.3"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "50"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "16.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "13.2"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "76"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "S"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "7.9"
				}]
			}]
		}, {
			"WeatherDate": "4/4/2014",
			"lstSerieData": [{
				"Aggregation": "0-8",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.2"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "50"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "12.8"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "11.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "88"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "NW"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "9.0"
				}]
			}, {
				"Aggregation": "8-16",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "13.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "11.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "79"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "NW"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "12.6"
				}]
			}, {
				"Aggregation": "16-24",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "12.1"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "10.5"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "73"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "NW"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "10.1"
				}]
			}]
		}, {
			"WeatherDate": "4/5/2014",
			"lstSerieData": [{
				"Aggregation": "0-8",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "20"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "9.9"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "6.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "89"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "NW"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "6.8"
				}]
			}, {
				"Aggregation": "8-16",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "10"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "18.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "9.0"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "58"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "SW"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "9.4"
				}]
			}, {
				"Aggregation": "16-24",
				"lstSerie": [{
					"SerieName": "Precipitation (mm)",
					"SerieValue": "0.0"
				}, {
					"SerieName": "Precipitation Risk (%)",
					"SerieValue": "10"
				}, {
					"SerieName": "Temperature max (°C)",
					"SerieValue": "18.0"
				}, {
					"SerieName": "Temperature min (°C)",
					"SerieValue": "11.5"
				}, {
					"SerieName": "Relative humidity (%)",
					"SerieValue": "66"
				}, {
					"SerieName": "Wind Direction",
					"SerieValue": "SW"
				}, {
					"SerieName": "Wind Speed (km/h)",
					"SerieValue": "10.1"
				}]
			}]
		}];
		$scope.myChioceData = $scope.mydata[0];
		$scope.hourData = [
			{
                "Date": "4/1/2014 1:00:00 AM", 
                "lstHourData": [
                    {
                        "Hour": "00", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "01", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "02", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "03", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "04", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "05", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "06", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }, 
                    {
                        "Hour": "07", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }, 
                    {
                        "Hour": "08", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "09", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "10", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "11", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "12", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "13", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "14", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "15", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "16", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "17", 
                        "SRL": "F", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk"
                    }, 
                    {
                        "Hour": "18", 
                        "SRL": "F", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk"
                    }, 
                    {
                        "Hour": "19", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "20", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "21", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "22", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "23", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }
                ]
            }, 
            {
                "Date": "4/2/2014 1:00:00 AM", 
                "lstHourData": [
                    {
                        "Hour": "0", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "1", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "2", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "3", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "4", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "5", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "6", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "7", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "8", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "9", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "10", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "11", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "12", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "13", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "14", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "15", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "16", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "17", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "18", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "19", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "20", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "21", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "22", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "23", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }
                ]
            }, 
            {
                "Date": "4/3/2014 1:00:00 AM", 
                "lstHourData": [
                    {
                        "Hour": "0", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "1", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "2", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "3", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "4", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "5", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "6", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "7", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "8", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "9", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "10", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Risk of Wind,Windy"
                    }, 
                    {
                        "Hour": "11", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Risk of Wind,Windy"
                    }, 
                    {
                        "Hour": "12", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Risk of Wind,Windy"
                    }, 
                    {
                        "Hour": "13", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Risk of Wind,Windy"
                    }, 
                    {
                        "Hour": "14", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "15", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "16", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "17", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "18", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "19", 
                        "SRL": "R", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Rain"
                    }, 
                    {
                        "Hour": "20", 
                        "SRL": "R", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Rain"
                    }, 
                    {
                        "Hour": "21", 
                        "SRL": "R", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Rain"
                    }, 
                    {
                        "Hour": "22", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Rain"
                    }, 
                    {
                        "Hour": "23", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Rain"
                    }
                ]
            }, 
            {
                "Date": "4/4/2014 1:00:00 AM", 
                "lstHourData": [
                    {
                        "Hour": "0", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Rain"
                    }, 
                    {
                        "Hour": "1", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Rain"
                    }, 
                    {
                        "Hour": "2", 
                        "SRL": "X", 
                        "BackColor": "ffe7b09c", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet"
                    }, 
                    {
                        "Hour": "3", 
                        "SRL": "A", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet"
                    }, 
                    {
                        "Hour": "4", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "5", 
                        "SRL": "A", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet"
                    }, 
                    {
                        "Hour": "6", 
                        "SRL": "A", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet"
                    }, 
                    {
                        "Hour": "7", 
                        "SRL": "A", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet"
                    }, 
                    {
                        "Hour": "8", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Windy"
                    }, 
                    {
                        "Hour": "9", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Windy"
                    }, 
                    {
                        "Hour": "10", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "11", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "12", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "13", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "14", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "15", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "16", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "17", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "18", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "19", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "20", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "21", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "22", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "23", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }
                ]
            }, 
            {
                "Date": "4/5/2014 1:00:00 AM", 
                "lstHourData": [
                    {
                        "Hour": "0", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }, 
                    {
                        "Hour": "1", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }, 
                    {
                        "Hour": "2", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Temperature too Low"
                    }, 
                    {
                        "Hour": "3", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Temperature too Low"
                    }, 
                    {
                        "Hour": "4", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }, 
                    {
                        "Hour": "5", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Temperature too Low"
                    }, 
                    {
                        "Hour": "6", 
                        "SRL": "T", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Temperature too Low"
                    }, 
                    {
                        "Hour": "7", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Temperature too Low"
                    }, 
                    {
                        "Hour": "8", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Leaf Surface too wet,Temperature too Low"
                    }, 
                    {
                        "Hour": "9", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "10", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "11", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "12", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "13", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "14", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "15", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "16", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "17", 
                        "SRL": "X", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Evaporation Risk,Windy"
                    }, 
                    {
                        "Hour": "18", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "19", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "20", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }, 
                    {
                        "Hour": "21", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "22", 
                        "SRL": "", 
                        "BackColor": "ffc2c76c", 
                        "FontColor": "ff000000", 
                        "ToolTip": null
                    }, 
                    {
                        "Hour": "23", 
                        "SRL": "V", 
                        "BackColor": "fff2cd74", 
                        "FontColor": "ff000000", 
                        "ToolTip": "Windy"
                    }
                ]
            }];
        $scope.chioceHourData = $scope.hourData[0];
        $scope.tabStr =  {
        	"Name": "legend", 
        	"Data": [
        	    "<div id=\"SparayWindowGroundSprayingRestrictions\"><table style=\"BORDER-COLLAPSE: collapse\" class=\"restrictTable\"  >		<tr>			<th class=\"legendTableHeader\" colspan=\"9\">Restrictions Legend</th>		</tr>		<tr>			<td class=\"legendLetterCell\">A</td><td style=\"width:29%;\">Leaf Surface too wet</td>			<td class=\"legendLetterCell\">D</td><td style=\"width:29%;\">Temperature too High</td>			<td class=\"legendLetterCell\">F</td><td style=\"width:29%;\">Evaporation Risk</td>		</tr>		<tr>			<td class=\"legendLetterCell\">R</td><td style=\"width:29%;\">Rain</td>			<td class=\"legendLetterCell\">T</td><td style=\"width:29%;\">Temperature too Low</td>			<td class=\"legendLetterCell\">U</td><td style=\"width:29%;\">Risk of Wind</td>		</tr>		<tr>			<td class=\"legendLetterCell\">V</td><td style=\"width:29%;\">Windy</td>			<td class=\"legendLetterCell\">X</td><td style=\"width:29%;\">Multiple Risks</td>			<td class=\"legendLetterCell\"> </td><td style=\"width:29%;\"> </td>		</tr>	</table>    </div>", 
        	    "<div id=\"GroundSprayingColoursLegend\"><TABLE style=\"BORDER-COLLAPSE: collapse\" class=restrictTable  ><TBODY><TR><TH class=legendTableHeader colSpan=9>Colours Legend</TH></TR><TR><TD class=legendColourCell>Night time</TD><TD class=legendColourCell>Day time</TD><TD class=legendColourCell></TD></TR><TR><TD class=legendColourCell><IMG  alt=\"\" src=\"../../images/30x12_C2C76C.gif\" width=30 height=12></TD><TD class=legendColourCell><IMG  alt=\"\" src=\"../../images/30x12_AAB400.gif\" width=30 height=12></TD><TD>Spraying Recommended</TD></TR><TR><TD class=legendColourCell><IMG  alt=\"\" src=\"../../images/30x12_F2CD74.gif\" width=30 height=12></TD><TD class=legendColourCell><IMG  alt=\"\" src=\"../../images/30x12_FFB400.gif\" width=30 height=12></TD><TD>Restricted Recommendation</TD></TR><TR><TD class=legendColourCell><IMG  alt=\"\" src=\"../../images/30x12_E7B09C.gif\" width=30 height=12></TD><TD class=legendColourCell><IMG  alt=\"\" src=\"../../images/30x12_FB5438.gif\" width=30 height=12></TD><TD>Not Recommended</TD></TR></TBODY></TABLE></div>"
        	]
    	};
		$scope.firstStrArr = $scope.tabStr.Data;
		$scope.firstStr = $scope.firstStrArr[0];
		$scope.secondStr = $scope.firstStrArr[1];
		
		//需要进行逻辑判断style的取值
		$scope.styleArr = ["not","is","not"];
		$scope.chioceStyle = function(){
			var myDateTime = new Date();
			var hr=myDateTime.getHours();
			if(hr<8){
				$scope.styleArr = ["is","not","not"];
			}else if(hr<16){
				$scope.styleArr = ["not","is","not"];
			}else{
				$scope.styleArr = ["not","not","is"];
			}
		};
		$scope.chioceStyle();	
		
	})

.directive('sayHello', function() {
	return {
		restrict: 'E',
		replace: true,
//		scope: {
//			tip: '=tip',
//		},
//		template: 'tip',
		templateUrl: 'expanderTemp.html',
		transclude: true
	};
})
//
//.directive('sayTabshow', function() {
//	return {
//		restrict: 'E',
//		replace: true,
//		scope: {
//			tip: '@tip',
//		},
//		template: 'tip',
//	};
//})
//
//.directive('iontemImagetext', function() {
//	return {
//		restrict: 'E',
//		replace: true,
//		scope: {
//			tip: '=tip',
//		},
//		template: 'tip',
//	};
//})

.controller('MySecondDataCtrl', function($scope) { //关于数据
	
	$scope.ownerData = [{
		"WeatherDate": "4/1/2014",
		"lstSerieData": [{
			"Aggregation": "00",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "11.3"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "81"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "W"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.1"
			}]
		}, {
			"Aggregation": "01",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "11.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "83"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "W"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.0"
			}]
		}, {
			"Aggregation": "02",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "11.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "76"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.3"
			}]
		}, {
			"Aggregation": "03",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "12.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "71"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.4"
			}]
		}, {
			"Aggregation": "04",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "11.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "76"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.6"
			}]
		}, {
			"Aggregation": "05",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "11.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "71"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.8"
			}]
		}, {
			"Aggregation": "06",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "10.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "82"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "S"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.7"
			}]
		}, {
			"Aggregation": "07",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "10.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "82"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "S"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.7"
			}]
		}, {
			"Aggregation": "08",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "12.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "71"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "S"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.7"
			}]
		}, {
			"Aggregation": "09",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "14.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "63"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "1.8"
			}]
		}, {
			"Aggregation": "10",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "16.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "59"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.1"
			}]
		}, {
			"Aggregation": "11",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "17.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "55"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.5"
			}]
		}, {
			"Aggregation": "12",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "18.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "52"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.8"
			}]
		}, {
			"Aggregation": "13",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "19.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "46"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.9"
			}]
		}, {
			"Aggregation": "14",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "19.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "46"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.9"
			}]
		}, {
			"Aggregation": "15",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "20.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "43"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.7"
			}]
		}, {
			"Aggregation": "16",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "20.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "43"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.4"
			}]
		}, {
			"Aggregation": "17",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "20"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "20.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "40"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.2"
			}]
		}, {
			"Aggregation": "18",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "19.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "43"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.1"
			}]
		}, {
			"Aggregation": "19",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "10"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "17.5"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "44"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "SE"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.6"
			}]
		}, {
			"Aggregation": "20",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "5"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "16.0"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "50"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.5"
			}]
		}, {
			"Aggregation": "21",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "5"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "14.7"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "60"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.6"
			}]
		}, {
			"Aggregation": "22",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "5"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "13.7"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "66"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.6"
			}]
		},{
			"Aggregation": "23",
			"lstSerie": [{
				"SerieName": "Precipitation (mm)",
				"SerieValue": "0.0"
			}, {
				"SerieName": "Precipitation Risk (%)",
				"SerieValue": "0"
			}, {
				"SerieName": "Temperature max (°C)",
				"SerieValue": "12.8"
			}, {
				"SerieName": "Relative humidity (%)",
				"SerieValue": "69"
			}, {
				"SerieName": "Wind Direction",
				"SerieValue": "E"
			}, {
				"SerieName": "Wind Speed (km/h)",
				"SerieValue": "2.4"
			}]
		}]
	}];
	$scope.mychioceOwnerData = $scope.ownerData[0];
})