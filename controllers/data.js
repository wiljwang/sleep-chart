const Datum = require("../models/Datum");

// @desc    get all data
// @route   GET /api/v1/data
// @access  public
exports.getData = async (req, res, next) => {
  try {
    const data = await Datum.find();
    return res.status(
      200,
      json({
        success: true,
        count: data.length,
        data: data,
      })
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};

// @desc    add datum
// @route   POST /api/v1/data
// @access  public
exports.addDatum = async (req, res, next) => {
  try {
    const { starts, ends } = req.body;
    const datum = await Datum.create(req.body);
    return res.status(201).json({
      success: true,
      data: datum,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "server error",
      });
    }
  }
};

// @desc    delete datum
// @route   DELETE /api/v1/data/:id
// @access  public
exports.deleteDatum = async (req, res, next) => {
  try {
    const datum = await Datum.findById(req.params.id);
    if (!datum) {
      return res.status(404).json({
        success: false,
        error: "no datum found",
      });
    }
    await datum.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
