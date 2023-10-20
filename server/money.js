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

let moneyTotal = 100 // Initial money total (display total)
const bettingIncrements = [5, 10, 25] // Betting increments (bind to buttons)
let selectedBet = null // Keeps track of selected bet
let raceStarted = false // Tracks whether the race has started or not
let raceNumber = 1 // Keeps track of race/round number

function placeBet(betIndex) {
  if (!raceStarted) {
    selectedBet = betIndex
  } else {
    console.log('Invalid bet selection') // If the race has started, bets can't be placed
  }
}

function startRace() {
  if (selectedBet === null) {
    console.log('Please select a bet amount.')
    return
  }

  const betAmount = bettingIncrements[selectedBet] // Use the global bettingIncrements array

  raceStarted = true

  const isWin = true

  if (isWin) {
    moneyTotal += betAmount
    console.log(
      `Round ${raceNumber} Win! You win $${betAmount}. Total money: $${moneyTotal}`
    )
  } else {
    moneyTotal -= betAmount
    console.log(`Round ${raceNumber} Loss. Total money: $${moneyTotal}`)
  }

  if (moneyTotal < 5 || raceNumber >= 5) {
    const gameOverMessage =
      moneyTotal < 5 ? 'Game Over' : moneyTotal >= 100 ? 'Game Win' : ''
    if (gameOverMessage) {
      console.log(gameOverMessage)
    }
  } else {
    raceNumber++
  }
}
