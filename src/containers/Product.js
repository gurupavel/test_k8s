import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

function booleanFormatter(value) {
    return value ? 'YES' : 'NO';
}

const fields = {
    id: {
        label: "Truck identifier:",
        formatter: null,
        visible: true
    },
    manufacturer: {
        label: "Manufacturer:",
        visible: true
    },
    type: {
        label: "Model:",
        visible: true
    },
    capacity: {
        label: "Capacity (kg):",
        visible: true
    },
    powerUnitValue: {
        label: "Energy:",
        visible: true
    },
    buildClassValue: {
        label: "Build class value:",
        visible: true
    },
    explosionProofValue: {
        label: "Explosion proof:",
        formatter: booleanFormatter,
        visible: true
    },
    serialNumber: {
        label: "Serial no.:",
        visible: true
    },
    yearOfBuild: {
        label: "Year of Manufacture:",
        visible: true
    },
    mastTypeValue: {
        label: "Mast Type:",
        visible: true
    },
    forkLength: {
        label: "Fork Length (mm):",
        visible: true
    },
    liftHeight: {
        label: "Lift Height (mm):",
        visible: true
    },
    batteryValue: {
        label: "Battery:",
        formatter: booleanFormatter,
        visible: true
    },
    batteryVoltage: {
        label: "Battery voltage:",
        visible: true
    },
    batteryCapacity: {
        label: "Battery capacity:",
        visible: true
    },
    chargerValue: {
        label: "Charger value:",
        formatter: booleanFormatter,
        visible: true
    },
    chargerVoltage: {
        label: "Charger voltage:",
        visible: true
    },
    chargerCurrent: {
        label: "Charger current:",
        visible: true
    },
    acdriveValue: {
        label: "AC drive value:",
        formatter: booleanFormatter,
        visible: true
    },
    cabinValue: {
        label: "Cabin value:",
        visible: true
    },
    workingHours: {
        label: "Working hours:",
        visible: true
    },
    accessorieslang: {
        label: "Accessories:",
        visible: true
    },
    warrantyEnduser: {
        label: "Warranty:",
        visible: true
    },
    dealerQualityRatingValue: {
        label: "Dealer quality rating:",
        visible: true
    },
    manufacturerQualityRatingValue: {
        label: "Manufacturer quality:",
        visible: true
    }
};

class Product extends Component {

    getItem() {
        return this.props.location.state.item;
    }

    getLabelForField(fieldName) {
        // Try to get field label
        let field = fields[fieldName];
        if (field) {
            return field.label;
        }

        return fieldName;
    }

    getVisibilityForField(fieldName) {
        let field = fields[fieldName];
        if (field) {
            if (undefined !== field.visible) {
                return field.visible;
            }
        }

        return true;
    }

    getTextForField(fieldName) {
        // Try to get field data formatter
        let field = fields[fieldName];
        if (field) {
            if (field.formatter) {
                let value = this.getItem()[fieldName];
                return field.formatter(value);
            }
        }

        return this.getItem()[fieldName];
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title={'Equivvy truck #' + this.getTextForField('id') + ' details'}
                />
                <div style={styles.menuContainer}>
                    <Paper>
                        <MenuList>
                            <MenuItem>Draft truck list</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Paper>
                </div>
                <div style={styles.contentContainer}>
                    <Paper>
                        {
                            Object.keys(this.getItem()).map((key) => {
                                if (!this.getVisibilityForField(key)) {
                                    return undefined;
                                }
                                return <div style={styles.textContainer}>
                                    <b>{this.getLabelForField(key)}</b> {this.getTextForField(key)}<br/></div>
                            })
                        }
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

const styles = {
    menuContainer: {
        float: 'left',
        width: '400px',
        height: '600px',
        background: '1px solid red'
    },
    contentContainer: {
        float: 'left',
        width: '800px',
        height: '600px',
        textAlign: 'left'
    },
    textContainer: {
        padding: '15px'
    }
};

export default connect(mapStateToProps, null)(Product);
