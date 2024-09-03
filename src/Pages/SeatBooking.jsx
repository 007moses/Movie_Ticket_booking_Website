// src/SeatBooking.js
import { useState } from 'react';
import jsPDF from 'jspdf';
import './SeatBooking.css';
import { Link } from 'react-router-dom';


const SeatBooking = () => {
  const rows = 5;
  const seatsPerRow = 10;

  const [seats, setSeats] = useState(() =>
    Array.from({ length: rows * seatsPerRow }, (_, id) => ({
      id,
      selected: false,
    }))
  );
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movie, setMovie] = useState('Raayan,Maharaja,Garudan,Indian-2');
  const [price, setPrice] = useState(10);

  const handleSeatClick = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id
          ? { ...seat, selected: !seat.selected }
          : seat
      )
    );
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(id)
        ? prevSeats.filter((seatId) => seatId !== id)
        : [...prevSeats, id]
    );
  };

  const handleMovieChange = (e) => {
    setMovie(e.target.value);
    setPrice(Number(e.target.value.split(' - $')[1]));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text('Ticket Details:', 10, 10);
    doc.text(`Movie: ${movie}`, 10, 20);
    doc.text(`Seats: ${selectedSeats.map(seatId => String.fromCharCode(65 + Math.floor(seatId / seatsPerRow)) + (seatId % seatsPerRow + 1)).join(', ')}`, 10, 30);
    doc.text(`Total price: Rs.${selectedSeats.length * price}`, 10, 40);

    doc.save('ticket-details.pdf');
  };

  return (
    <div>
      <h1 className='heading'>Seat Selection page</h1>
      <div className="seats-container">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.selected ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
          />
        ))}
      </div>
      <div className="controls">
        <select onChange={handleMovieChange} value={`${movie} - Rs.${price}`}>
          <option value="Raayan - $100">Raayan</option>
          <option value="Maharaja - $120">Maharaja</option>
          <option value="Garudan - $150">Garudan</option>
          <option value="Indian-2 - $150">Indian-2</option>
        </select>
        <p>Selected Seats: {selectedSeats.length}</p>
        <p>Total Price: Rs.{selectedSeats.length * price}</p>
        <Link to='/home'>
        <button onClick={generatePDF} className='get-ticket'>Download Ticket</button>
        </Link>
        
      </div>
    </div>
  );
};

export default SeatBooking;
