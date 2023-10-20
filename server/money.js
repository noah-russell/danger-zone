// - - - PSEUDOCODE - - - //

// BASIC LOGIC //

// select bet (highlight/outline), (one at a time)
// race begins on click start (only if bet is valid)
// if chosen horse wins, double bet and add to total (return ROUND WIN)
// if chosen horse loses, subtract bet from total (return ROUND LOSS)
// if money <5, return GAME OVER
// final round if <100, return GAME OVER (You didnt make any money)
// final round if >100, return GAME WIN (overall win)

// NOTES //

// everything on page needs to reset on race finish except money total and race number
// if bet amount less than money total, dont allow race to start (clicking start returns error message)
// win/loss at every round, then final win/loss
// round win/loss comes before game win/loss

// MESSAGES //

// invalid bet amount (bet amount is less than money total) - triggered by click start
// race win (+ winnings amount)
// race loss
// game over
// game win

// - - CODE - - - //

let moneyTotal = 100 // display total
const bettingIncrements = [5, 10, 25] // bind to buttons

function placeBet(betIndex) {
  if (!raceStarted) {
    if (betIndex >= 0 && betIndex < bettingIncrements.length) {
      selectedBet = betIndex
    } else {
      console.log('Invalid bet selection')
    }
  }
}

function startRace() {
  if (selectedBet === null) {
    console.log('Please select a bet amount.')
  } else {
    raceStarted = true
    const isWin = simulateRaceOutcome()
    if (isWin) {
      moneyTotal += bettingIncrements[selectedBet] * 2
      console.log(
        `Round ${raceNumber} Win! You win $${bettingIncrements[selectedBet]}. Total money: $${moneyTotal}`
      )
    } else {
      moneyTotal -= bettingIncrements[selectedBet]
      console.log(`Round ${raceNumber} Loss. Total money: $${moneyTotal}`)
    }

    if (moneyTotal < 5) {
      console.log('Game Over')
    } else if (moneyTotal >= 100 && raceNumber > 1) {
      console.log('Game Win (Overall Win)')
    } else if (raceNumber > 1) {
      raceNumber++
    }
  }
}

placeBet()
startRace()
