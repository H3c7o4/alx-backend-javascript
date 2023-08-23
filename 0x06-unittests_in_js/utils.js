Utils = {
  calculateNumber: function (type, a, b) {
    aRound = Math.round(a);
    bRound = Math.round(b);

    if (type === 'SUM') return aRound + bRound;
    else if (type === 'SUBTRACT') return aRound - bRound;
    else if (type === 'DIVIDE') {
      if (bRound === 0) return 'Error';
      return aRound / bRound;
    }
  }
}

module.exports = Utils;
