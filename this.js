//Exercise
var seats = {
    seats: 50,
    seatsSold: 28,
    remainingSeats: function(){
      return (this.seats - this.seatsSold);
      },
    enoughSeats: function(){
      if(this.remainingSeats() > 0){
        return this.remainingSeats(seats);
      }
    }
  };
  
  
  console.log(seats.enoughSeats());


//Teoría-ejemplo:
var guide = {
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function (viewingUserRole) {
      if (viewingUserRole === 'paid') {
        return true;
      } else {
        return false;
      }
    },
    renderContent: function(userRole) {
      if (this.visibleToUser(userRole)) {
        console.log(this.title + " - " + this.content);
      } else {
        this.content = '';
        console.log(this.title + " - " + this.content);
      }
    }
  }
  
  user = { role: 'paid' };
  guide.renderContent(user.role);