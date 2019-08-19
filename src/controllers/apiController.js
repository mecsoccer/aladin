const aladinIndex = require('./helpers/aladin');

class Controller {
  static validate(req, res) {
    const { data, rules } = req.body;
    const inputs = Object.keys(data);
    const missingFields = [];

    rules.forEach((key) => {
      if (!inputs.includes(key)) missingFields.push(key);
    });

    if (missingFields.length > 0) return res.status(400).json(missingFields);

    return res.status(200).send({ valid: 'valid' });
  }

  static remove(req, res) {
    const { data, item } = req.body;

    if (!data[item]) return res.status(400).send('attribute not found');
    delete data[item];

    return res.status(200).json({ data });
  }

  static aladin(req, res) {
    const { magic, dist } = req.body;
    if (magic.length !== dist.length) return res.status(400).json({ error: 'both arrays should have the same length' });

    const index = aladinIndex(magic, dist);

    return res.status(200).json({ index });
  }
}

module.exports = Controller;
