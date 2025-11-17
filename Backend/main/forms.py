from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length

class NameForm(FlaskForm):
    name = StringField(
        validators=[
            DataRequired(message="Name can't be empty"),
            Length(min=2, max=50, message="Name is between 2-50 character"
                   )
                ]
    )

    submit = SubmitField("Send")