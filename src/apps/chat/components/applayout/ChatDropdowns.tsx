import * as React from 'react';

import { useChatLLMDropdown } from './useLLMDropdown';
import { usePersonaIdDropdown } from './usePersonaDropdown';


export function ChatDropdowns(props: {
  conversationId: string | null
}) {

  // state
  const { chatLLMDropdown } = useChatLLMDropdown();
  const { personaDropdown } = usePersonaIdDropdown(props.conversationId);

  return <>
    {/* 2023-10-17 hide for demo purpose */}
    {/* Model selector */}
    {/* {chatLLMDropdown} */}

    {/* Persona selector */}
    {/* {personaDropdown} */}

  </>;
}
