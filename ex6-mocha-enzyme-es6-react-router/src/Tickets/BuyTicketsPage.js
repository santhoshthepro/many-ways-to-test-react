import React from 'react';
import SeatingChart from './Seating/SeatingChart';

class BuyTicketsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      seatData: this.props.route.initialSeatData,
      ticketPackage: {
        seats: []
      }
    };

    this.updateSeatStatus = this.updateSeatStatus.bind(this);
  }

  updateSeatStatus(seatNumber) {
    let thisSeat;
    for (let i = 0, len = this.state.seatData.length; i < len; i++) {
      thisSeat = this.state.seatData[i].find((seat) => {
        return seat.seatNumber === seatNumber;
      });
      if (thisSeat) {
        break;
      }
    }

    if (!thisSeat.sold) {
      thisSeat.selected = !thisSeat.selected;

      let newSelectedSeats = this.state.ticketPackage.seats.slice(0);
      if (thisSeat.selected) {
        newSelectedSeats.push(thisSeat);
      } else {
        newSelectedSeats = newSelectedSeats.filter(seat => seat.seatNumber !== thisSeat.seatNumber)
      }

      this.setState({
        seatData: this.state.seatData,
        ticketPackage: {
          seats: newSelectedSeats
        }
      });
    }
  }

  render() {
    return (
      <div className="tickets text-center">
        <div className="page-header">
          <h1>Buy Tickets <small>Select the seats you wish to purchase below.</small></h1>
        </div>
        <SeatingChart onClick={this.updateSeatStatus} seatData={this.state.seatData} width={1024} height={640} />
      </div>
    );
  }
}

BuyTicketsPage.propTypes = {
  route: React.PropTypes.object.isRequired
};

export default BuyTicketsPage;
