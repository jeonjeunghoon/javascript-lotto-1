import TAGS from '../constants/tags.js';
import MESSAGE from '../constants/message.js';

const tagGenerators = {
  generateLottos: lottos => {
    return `
		<div id="lottos-amount-text">
			<span>${MESSAGE.BUY_LOTTO(lottos.length)}</span>
		</div>
		<div id="lotto-tickets">
			${TAGS.GENERATE_TICKET(lottos)}
		</div>`;
  },

  generateWinningNumberForm: () => {
    return `<form id="winning-numbers-form">
		<div id="winning-numbers-container">
			<div>
			${TAGS.GENERATE_LUCKY_NUMBER_INPUT()}
			</div>
			<div>
			${TAGS.BONUS_NUMBER_INPUT}
			</div>
		</div>
		${TAGS.CALCULATE_LOTTOS_BUTTON}
	</form>`;
  },

  generateWinningNumberTags: function () {
    return `
	${TAGS.WINNING_NUMBERS_LABELS}
	${this.generateWinningNumberForm()}`;
  },
};

export default tagGenerators;