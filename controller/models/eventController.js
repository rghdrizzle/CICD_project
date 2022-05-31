import models from "../../models";
const Event = models.Event;

export const getEvents = (req, res, next) => {
  Event.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
export const getEventsJoin = (req, res, next) => {
    Event.findAll({
        include:[
            {
                model: Image, // join 할 테이블 명
                required: false, // fasle - left outer join, true - inner join
                attributes: ['*'], //select 컬럼
                where: ["image_id = image_id"]
            }
        ]
    })
        .then((list) => {
            res.send(list);
        })
        .catch((err) => {
            console.err(err);
            next(err);
        });
};


export const getEvent = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Event.findOne({
    where: {
      event_id: id,
    },
  })
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const createEvent = (req, res, next) => {
  Event.create({
    name: req.body.name,
    start_datetime: req.body.start_datetime,
    end_datetime: req.body.end_datetime,
    event_content: req.body.event_content,
    shop_id: req.body.shop_id,
    image_id: req.body.image_id,
    enabled: true,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const updateEvent = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Event.update(
    {
      name: req.body.name,
      start_datetime: req.body.start_datetime,
      end_datetime: req.body.end_datetime,
      event_content: req.body.event_content,
      shop_id: req.body.shop_id,
      image_id: req.body.image_id,
      updated_datetime: req.body.updated_datetime,
      //   enabled: req.body.enabled,
    },
    {
      where: { event_id: id },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const deleteEvent = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Event.update(
    {
      removed_datetime: Date.now(),
      enabled: false,
    },
    {
      where: { event_id: id },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};
