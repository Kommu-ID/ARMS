import os
import random
import time
import pandas as pd
import numpy as np
import streamlit as st
import plotly.graph_objects as go
from groq import Groq

# Set API Key (Replace with actual key)
os.environ["GROQ_API_KEY"] = "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"
client = Groq(api_key=os.environ["GROQ_API_KEY"])

# Streamlit UI Setup
st.set_page_config(page_title="🚀 ARMS: Astronaut Survival Monitor", layout="wide")
st.title("🚀 ARMS: Astronaut Resource Management System")

# Real-time Data Simulation
def get_real_time_data():
    return {
        "Heart Rate (BPM)": random.randint(60, 120),
        "Oxygen Saturation (%)": round(random.uniform(85, 100), 1),
        "Blood Pressure (mmHg)": f"{random.randint(90, 120)}/{random.randint(60, 80)}",
        "Respiratory Rate (BPM)": random.randint(12, 20),
        "Hydration Level (%)": round(random.uniform(40, 100), 1),
        "Battery Level (%)": random.randint(10, 100),
        "Food Supply (Days)": random.randint(1, 10),
        "Water Supply (Liters)": random.randint(1, 50),
    }

# Survival Prediction Function
def predict_survival_time(data):
    oxygen_factor = data["Oxygen Saturation (%)"] / 100
    hydration_factor = data["Hydration Level (%)"] / 100
    battery_factor = data["Battery Level (%)"] / 100
    food_factor = data["Food Supply (Days)"] / 10
    survival_hours = (oxygen_factor + hydration_factor + battery_factor + food_factor) * 10
    return round(survival_hours, 2)

# Generate Real-Time Data
data = get_real_time_data()
survival_time = predict_survival_time(data)

# Layout
col1, col2 = st.columns(2)

with col1:
    st.metric("Predicted Survival Time", f"{survival_time} Hours")
    st.subheader("🔍 Health Metrics")
    for key, value in data.items():
        st.metric(key, value)
    if data["Oxygen Saturation (%)"] < 90 or data["Battery Level (%)"] < 20:
        st.warning("🚨 Critical Alert: Oxygen or Battery Levels are Low!")

with col2:
    st.subheader("📊 Resource & Health Trends")
    df = pd.DataFrame({"Metric": list(data.keys()), "Value": list(data.values())})
    fig = go.Figure([go.Bar(x=df["Metric"], y=df["Value"], marker_color='crimson')])
    fig.update_layout(title="Current Status of Astronaut Resources", xaxis_title="Metric", yaxis_title="Value")
    st.plotly_chart(fig)

# AI-generated Advisory (Groq API)
st.subheader("🤖 AI Advisor Suggestions")
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Give survival improvement tips for astronauts."}],
    model="llama-3.3-70b-versatile",
)
st.info(response.choices[0].message.content)
